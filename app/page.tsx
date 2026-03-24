export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Carslie</h1>
        <p className="text-lg text-gray-600">
          Your Glovebox, Upgraded.
        </p>
        <p className="text-gray-700 max-w-2xl">
          Manage your vehicles, documents, and service history — all in one place.
          No accounts. No hassle. Just everything you need, when you need it.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Store vehicle details, VIN, plates, and photos</li>
          <li>Secure document vault for license, insurance, registration</li>
          <li>Track maintenance and service history</li>
          <li>Expiration reminders so you never miss a deadline</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Carslie?</h2>
        <p className="text-gray-700 max-w-2xl">
          Carslie keeps everything on your device. Your data is yours — private,
          secure, and always accessible.
        </p>
      </section>
    </div>
  );
}