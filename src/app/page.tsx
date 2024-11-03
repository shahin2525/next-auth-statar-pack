const HomePage = () => {
  const git1 = process.env.GITHUB_ID;
  console.log(git1);
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Home Page 1</h1>
    </div>
  );
};

export default HomePage;
