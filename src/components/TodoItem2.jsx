function TodoItem2() {

  let todoName='Go to college,make her proud!';
  let todoDate='3/03/2024';

  
  return (
    <div class="container ">
  
    <div className="row kg-row">
      <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button>
        </div>
     </div>
     </div>
  );
}

export default TodoItem2;