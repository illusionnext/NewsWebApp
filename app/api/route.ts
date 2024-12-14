import { NextResponse } from "next/server";
import { use } from "react";

// Handles GET requests
export function GET() {
  const response = use(fetch("/api/get-endpoint").then((res) => res.json()));

  return NextResponse.json({
    message: "This is a GET response",
    data: response,
  });
}

// Handles POST requests
export function POST(request: Request) {
  const body = use(request.json());
  return NextResponse.json({ message: "This is a POST response", data: body });
}
