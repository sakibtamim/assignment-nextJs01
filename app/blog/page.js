"use client";
import { useEffect, useState } from "react";
import Container from "../components/shared/Container";
import Link from "next/link";

export default function Blog() {
  const [post, setPost] = useState([]);
  const [visible, setVisible] = useState(6);

  const visiblePost = post.slice(0, visible);

  const handleMore = () => {
    setVisible((prev) => prev + 3);
  };
  //   const handleLess = () => {
  //     setVisible((prev) => prev - 3);
  //   };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data.posts));
  }, []);
  return (
    <section className="py-10">
      <Container>
        <div className="text-[20px] font-semibold pb-[20px]">All Blog data</div>
        <div className=" flex flex-wrap justify-between gap-y-[20px]">
          {visiblePost.map((item) => (
            <div
              key={item.id}
              className="w-[32%] border border-black p-4 rounded"
            >
              <Link href={`/blog/${item.id}`}>
                <div>
                  <h2 className="text-[20px] font-bold pb-[10px]">
                    {item.title}
                  </h2>
                  <p className="text-[16px] text-gray-400 pb-[14px]">
                    {item.body}
                  </p>
                  <div className="flex items-center gap-x-[4px] pb-[14px]">
                    <h4 className="text-[16px]">tags:</h4>
                    <div className="flex gap-x-[8px]">
                      {item.tags?.map((tag) => (
                        <p className="text-[14px] text-gray-600 ">{tag}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-x-[10px] text-[16px] pb-[14px]">
                    <h4 className="">reactions:</h4>
                    <p className="text-green-500">
                      likes({item.reactions.likes})
                    </p>
                    <p className="text-red-500">
                      dislikes({item.reactions.dislikes})
                    </p>
                  </div>
                  <div className="flex justify-between text-[16px]">
                    <p>views: ({item.views})</p>
                    <p>userId: ({item.userId})</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center pt-[50px]">
          {post.length === visiblePost.length ? (
            ""
          ) : (
            <p
              onClick={handleMore}
              className="py-2 px-4 bg-black text-white inline-block cursor-pointer rounded"
            >
              See More
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
