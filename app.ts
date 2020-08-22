import { serve } from "https://deno.land/std@0.62.0/http/server.ts";
const s = serve({ port: 8080 });
console.log("http://localhost:8080/");
for await (const req of s) {
  req.respond({ body: "PRIMA ANANDA\n" });
}