import React from "react";
import { useParams } from "react-router-dom";

interface DetailPageProps {
  data: {
    [key: string]: {
      title: string;
      category: string;
      image: string;
      content: string;
    };
  };
}

const DetailPage: React.FC<DetailPageProps> = ({ data }) => {
  const { id } = useParams<{ id: string }>();
  const item = id ? data[id] : null;

  if (!item) {
    return (
      <div className="pt-32 text-center text-xl font-bold">
        Content not found.
      </div>
    );
  }

  return (
    <div className="pt-32 container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
      <p className="text-gray-600 text-lg mb-6">Category: {item.category}</p>
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-96 object-cover rounded-lg mb-8"
      />
      <div className="prose lg:prose-xl max-w-none">
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default DetailPage;
