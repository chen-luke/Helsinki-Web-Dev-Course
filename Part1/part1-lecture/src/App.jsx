const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} {props.age ? ", you are " + props.age + " years old." : "" }</p>
    </div>
  )
}


const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)

  const age = 100 + 20

  const friends = [
    {name: 'peter', age: '50'}
  ]

  return [
    <>
      <p>Hello World, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <h1>Greetings</h1>
      <Hello name='Luke'/>
      <Hello name='Sarah' age={age}/>
      <Hello name='Bobby' age={20 + 70}/>
      {/** Do not return OBJECTS*/}
      {/** <p>{friends[0]}</p> WRONG! */}
      {friends[0].name}
    </>
  ]

  // The above <div> inside the return is actually JSX even though it looks like HTML
  // React will compile the JSX into javascript like below
  /*
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p', null, 'Hello World, it is', now.toString()
      )
      React.createElement(
        'p', null, a, 'plus', b, 'is', a + b
      )
    )

    This translation/compilation is handled by Babel
    In JSX all tags must be close. Ex <br> is <br />

    You can use "fragments" <></> as parent div without using a div to keep things clean
    You can return [<div></div><div></div>] an array of JSX elements as well

  */ 

}

export default App
