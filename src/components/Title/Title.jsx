export const Title = () => {
  
  const title = "Hello React";
  const bg = "green";
  const styles = { backgroundColor: bg, color: "black" };

  const getHello = () => "Hello";

  return (
    <h1 style={styles} className="title">
      {title}
      <hr />
      <strong>{getHello()}</strong>
    </h1>
  );
};
