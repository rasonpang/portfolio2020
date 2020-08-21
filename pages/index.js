import Paginated from "screens/Paginated";

export default () => {
  return (
    <Paginated>
      <div expand={3} cl={"black"}>
        a
      </div>
      <div>b</div>
      <div expand={2} cl={"red"}>
        c
      </div>
    </Paginated>
  );
};
