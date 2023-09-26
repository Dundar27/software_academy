import { PostProvider } from "@/context/post";

export default function BlogLayout({ children }) {
  return <PostProvider>{children}</PostProvider>;
}
