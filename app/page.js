import LikeButton from "./like-button";

function Header({ title = "Hello, World!" }) {
  console.log(title);
  return <h1>Simon says, {title}</h1>;
}

function HomePageContent() {}

export default function HomePage() {
  const names = ["Ada", "Grace", "Margaret"];

  return (
    <div>
      {/* nested component */}
      <Header />
      <Header title="Reacting" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
