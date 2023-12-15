"use client";

import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = (post) => {};
  const handleDelete = (post) => {};
  return (
    <Profile
      name={"My"}
      desc="Wellcome to your personalized profile page."
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default Page;
