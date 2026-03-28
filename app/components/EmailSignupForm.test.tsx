import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailSignupForm from "./EmailSignupForm";

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("EmailSignupForm", () => {
  it("renders email input, checkbox, and submit button", () => {
    render(<EmailSignupForm />);

    expect(screen.getByPlaceholderText("Your email address")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Start the Training" })).toBeInTheDocument();
  });

  it("renders with custom button text", () => {
    render(<EmailSignupForm buttonText="Start Free" />);
    expect(screen.getByRole("button", { name: "Start Free" })).toBeInTheDocument();
  });

  it("button is disabled when consent is not checked", () => {
    render(<EmailSignupForm />);
    expect(screen.getByRole("button", { name: "Start the Training" })).toBeDisabled();
  });

  it("button is enabled after checking consent", async () => {
    const user = userEvent.setup();
    render(<EmailSignupForm />);

    await user.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("button", { name: "Start the Training" })).toBeEnabled();
  });

  it("does not submit when email is empty", async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    render(<EmailSignupForm />);

    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: "Start the Training" }));

    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("does not submit when consent is unchecked", async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    render(<EmailSignupForm />);

    await user.type(screen.getByPlaceholderText("Your email address"), "test@example.com");
    // Don't check consent
    await user.click(screen.getByRole("button", { name: "Start the Training" }));

    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("submits to /api/subscribe with trimmed email on valid form", async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ success: true }), { status: 200 }),
    );

    render(<EmailSignupForm />);

    await user.type(screen.getByPlaceholderText("Your email address"), "  kai@example.com  ");
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: "Start the Training" }));

    expect(fetchSpy).toHaveBeenCalledWith("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "kai@example.com" }),
    });
  });

  it("shows success message after successful submission", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ success: true }), { status: 200 }),
    );

    render(<EmailSignupForm />);

    await user.type(screen.getByPlaceholderText("Your email address"), "kai@example.com");
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: "Start the Training" }));

    await waitFor(() => {
      expect(screen.getByText(/You.re in/)).toBeInTheDocument();
      expect(screen.getByText(/Check your inbox/)).toBeInTheDocument();
    });

    // Form should be gone
    expect(screen.queryByPlaceholderText("Your email address")).not.toBeInTheDocument();
  });

  it("shows error message when API returns non-200", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ error: "fail" }), { status: 502 }),
    );

    render(<EmailSignupForm />);

    await user.type(screen.getByPlaceholderText("Your email address"), "kai@example.com");
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: "Start the Training" }));

    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    });

    // Form should still be visible for retry
    expect(screen.getByPlaceholderText("Your email address")).toBeInTheDocument();
  });

  it("shows error message when fetch throws (network error)", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("Network error"));

    render(<EmailSignupForm />);

    await user.type(screen.getByPlaceholderText("Your email address"), "kai@example.com");
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: "Start the Training" }));

    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    });
  });

  it("shows 'Sending...' during submission", async () => {
    const user = userEvent.setup();
    let resolvePromise: (value: Response) => void;
    vi.spyOn(globalThis, "fetch").mockReturnValue(
      new Promise((resolve) => { resolvePromise = resolve; }),
    );

    render(<EmailSignupForm />);

    await user.type(screen.getByPlaceholderText("Your email address"), "kai@example.com");
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: "Start the Training" }));

    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();

    // Resolve to clean up
    resolvePromise!(new Response(JSON.stringify({ success: true }), { status: 200 }));
    await waitFor(() => {
      expect(screen.getByText(/You.re in/)).toBeInTheDocument();
    });
  });

  it("prevents double-submit during pending request", async () => {
    const user = userEvent.setup();
    let callCount = 0;
    vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      callCount++;
      return new Promise((resolve) => {
        setTimeout(() => resolve(new Response(JSON.stringify({ success: true }), { status: 200 })), 100);
      });
    });

    render(<EmailSignupForm />);

    await user.type(screen.getByPlaceholderText("Your email address"), "kai@example.com");
    await user.click(screen.getByRole("checkbox"));

    const button = screen.getByRole("button", { name: "Start the Training" });
    await user.click(button);
    // Second click while submitting
    await user.click(screen.getByRole("button", { name: "Sending..." }));

    expect(callCount).toBe(1);
  });
});
