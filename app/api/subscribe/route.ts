import { NextResponse } from "next/server";

const AC_URL = "https://mitarbeiterfuehren.activehosted.com/proc.php";
const AC_FORM_ID = "23";
const AC_TOKEN = "b0a750a00aff5fa498993804db94a1b8";

export async function POST(request: Request) {
  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = body.email?.trim();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const form = new URLSearchParams();
  form.append("u", AC_FORM_ID);
  form.append("f", AC_FORM_ID);
  form.append("s", "");
  form.append("c", "0");
  form.append("m", "0");
  form.append("act", "sub");
  form.append("v", "2");
  form.append("or", AC_TOKEN);
  form.append("email", email);
  form.append("field[82]", "I agree");

  let response: Response;
  try {
    response = await fetch(AC_URL, {
      method: "POST",
      body: form,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
  } catch {
    return NextResponse.json(
      { error: "Subscription failed" },
      { status: 502 },
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: "Subscription failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
