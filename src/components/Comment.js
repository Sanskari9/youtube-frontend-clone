import React from "react";

function Comment() {
  return (
    <div className="flex gap-2 my-6">
      <img src="https://static.sadhguru.org/d/46272/1633201075-1633201074736.jpg" alt="" className="h-[50px] w-[50px] rounded-[50%]"/>
      <div className="flex flex-col gap-2">
        <h1 className="font-medium">
          Krishna <span className="text-sm font-normal ml-2 text-[#aaaaaa]">1 Day ago</span>
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae hic
          quisquam nihil quas sit delectus cumque fuga quod iusto sunt!
        </p>
      </div>
    </div>
  );
}

export default Comment;
