"use client";
import Container from "@/app/components/shared/Container";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SingleBlog() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data.posts));
  }, []);

  const singleBlog = post.find((item) => item.id === Number(id));

  return (
    <section className="py-10">
      <Container>
        {singleBlog ? (
          <div className="w-[50%] ">
            <h2 className="text-[40px] font-bold pb-[20px]">
              {singleBlog.title}
            </h2>
            <p className="text-[24px] text-gray-400 pb-[20px]">
              {singleBlog.body}
            </p>
            <div className="flex items-center gap-x-[4px] pb-[14px]">
              <h4 className="text-[18px]">tags:</h4>{" "}
              <div className="flex gap-x-[8px]">
                {singleBlog.tags?.map((tag) => (
                  <p key={tag} className="text-[18px] text-gray-600 ">
                    {tag} .
                  </p>
                ))}
              </div>
            </div>
            <div className="flex gap-x-[10px] text-[18px] pb-[14px]">
              <h4 className="">reactions:</h4>
              <p className="text-green-500">
                likes({singleBlog.reactions.likes})
              </p>
              <p className="text-red-500">
                dislikes({singleBlog.reactions.dislikes})
              </p>
            </div>
            <div className="flex justify-between text-[18px]">
              <p>views: ({singleBlog.views})</p>
              <p>userId: ({singleBlog.userId})</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </section>
  );
}
