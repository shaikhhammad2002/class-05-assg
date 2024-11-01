import Card from './components/Card';

const TwoCardSection = () => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Card A" content="This is card A." bgColor="bg-purple-500" />
        <Card title="Card B" content="This is card B." bgColor="bg-yellow-500" />
      </div>
    </section>
  );
};

export default TwoCardSection;
