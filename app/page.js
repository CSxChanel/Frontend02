import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard"); // Auto-redirect ke dashboard
}
