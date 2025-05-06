
import LoanInfo from './LoanInfo'
import UserInfo from './UserInfo'

const TopInfo = () => {
  return (
    <div className="flex flex-col bg-darkText text-secondary/80 py-2 px-4 rounded-b-2xl shadow-md gap-2">
        <UserInfo />
        <LoanInfo />
    </div>
  )
}

export default TopInfo