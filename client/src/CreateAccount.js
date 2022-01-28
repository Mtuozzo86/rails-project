function CreateAccount() {
  return (
    <div className="App">
      <form>
        <div>
          Create Your Login: <input type="text"></input>
        </div>
        <div>
          Create Your Password: <input type="password"></input>
        </div>
        <div>
          Confirm Password: <input type="password"></input>
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default CreateAccount;
