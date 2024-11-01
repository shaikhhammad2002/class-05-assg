import Card from './components/Card';

const ThreeCardSection = () => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Card 1" content="This is card 1." bgColor="bg-blue-500" />
        <Card title="Card 2" content="This is card 2." bgColor="bg-green-500" />
        <Card title="Card 3" content="This is card 3." bgColor="bg-red-500" />
      </div>
    </section>
  );
};

export default ThreeCardSection;
