import WhyChooseUs from './WhyChooseUs';

export default function HeaderSection() {
  return (
    <section className="w-full h-auto bg-gradient-to-b from-background via-black to-black rounded-b-2xl overflow-hidden">
      <div className="h-[90dvh] flex flex-col justify-center items-center bg-muted text-center rounded-b-2xl p-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome to Flora
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Your one-stop shop for all products with a minimum{" "}
          <strong>15% OFF</strong>!
        </p>
      </div>

      <WhyChooseUs />
    </section>
  );
};