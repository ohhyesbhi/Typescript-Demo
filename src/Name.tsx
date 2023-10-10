import {ReactNode} from 'react'

// import {PropsWithChildren} from 'react'

type titleProps = 
{
  sendName:string,
  list?:string[],
  onChangeHandler:React.ChangeEventHandler<HTMLInputElement>,
  children:ReactNode
}

function Name({sendName,list,onChangeHandler,children}: titleProps) {

  // instead of witing children : ReactNode ypu can simply do the following
  // function Name({sendName,list,onChangeHandler,children}: PropsWithChildren<titleProps>) {

  return (
    <div>
 {sendName}
         <p>
        {
          list && list.length > 0 && list[0]
        }
        </p>

        <input onChange={onChangeHandler}/>
        {
          children
        }
    </div>
  )
}

export default Name
