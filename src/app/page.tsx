"use client";
import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login(): JSX.Element {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        console.log("Authentication successful!");
        router.push("/dashboard"); // Redirect to the dashboard page
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error authenticating employee:", error);
      setError("Error authenticating employee");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#F2F6FF]">
      <div className="w-[350px]">
        <h1 className="text-lg font-semibold mb-4">
          Welcome to the 3R Shane family!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full mt-4">
            Log in
          </Button>
        </form>
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <div className="flex flex-col items-center space-y-4 mt-4">
          <Link href="/forgotpassword">
            <span className="text-sm">Forgot your password?</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
