export default ({ children }) => {
  console.log(children);
  return (
    <div className="container">
      <div className="wrapper">{children}</div>
    </div>
  );
};
