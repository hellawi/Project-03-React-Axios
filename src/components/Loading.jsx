import { RotatingLines } from "react-loader-spinner"
function Loading() {
  return (
    <div>
        <RotatingLines visible={true} strokeColor="blue"/>
    </div>
  )
}
export default Loading;