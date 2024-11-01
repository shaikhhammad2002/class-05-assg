const Card = ({ title, content, bgColor }: { title: string; content: string; bgColor: string }) => {
    return (
      <div className={`p-4 rounded-lg shadow text-white ${bgColor}`}>
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    );
  };
  
  export default Card;
  