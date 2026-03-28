import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "./route";

beforeEach(() => {
  vi.restoreAllMocks();
});

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/subscribe", () => {
  it("returns 400 for invalid JSON body", async () => {
    const request = new Request("http://localhost/api/subscribe", {
      method: "POST",
      body: "not json",
    });

    const response = await POST(request);
    expect(response.status).toBe(400);

    const data = await response.json();
    expect(data.error).toBe("Invalid request");
  });

  it("returns 400 when email is missing", async () => {
    const response = await POST(makeRequest({}));
    expect(response.status).toBe(400);

    const data = await response.json();
    expect(data.error).toBe("Valid email required");
  });

  it("returns 400 when email is empty string", async () => {
    const response = await POST(makeRequest({ email: "   " }));
    expect(response.status).toBe(400);

    const data = await response.json();
    expect(data.error).toBe("Valid email required");
  });

  it("returns 400 when email has no @", async () => {
    const response = await POST(makeRequest({ email: "not-an-email" }));
    expect(response.status).toBe(400);

    const data = await response.json();
    expect(data.error).toBe("Valid email required");
  });

  it("posts correct form data to ActiveCampaign on valid email", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("OK", { status: 200 }),
    );

    const response = await POST(makeRequest({ email: "  kai@example.com  " }));
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.success).toBe(true);

    // Verify the call to ActiveCampaign
    expect(fetchSpy).toHaveBeenCalledOnce();

    const [url, options] = fetchSpy.mock.calls[0];
    expect(url).toBe("https://mitarbeiterfuehren.activehosted.com/proc.php");
    expect(options?.method).toBe("POST");
    expect(options?.headers).toEqual({ "Content-Type": "application/x-www-form-urlencoded" });

    // Parse the form body
    const body = new URLSearchParams(options?.body as string);
    expect(body.get("email")).toBe("kai@example.com"); // trimmed
    expect(body.get("u")).toBe("23");
    expect(body.get("f")).toBe("23");
    expect(body.get("act")).toBe("sub");
    expect(body.get("v")).toBe("2");
    expect(body.get("or")).toBe("b0a750a00aff5fa498993804db94a1b8");
    expect(body.get("field[82]")).toBe("I agree");
  });

  it("returns 502 when ActiveCampaign returns non-200", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("Server Error", { status: 500 }),
    );

    const response = await POST(makeRequest({ email: "kai@example.com" }));
    expect(response.status).toBe(502);

    const data = await response.json();
    expect(data.error).toBe("Subscription failed");
  });

  it("returns 502 when ActiveCampaign is unreachable", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("ECONNREFUSED"));

    const response = await POST(makeRequest({ email: "kai@example.com" }));
    // The current implementation doesn't catch fetch errors — this will throw
    // This test documents the expected behavior
    expect(response.status).toBe(502);
  });
});
