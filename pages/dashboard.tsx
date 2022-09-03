import { NextPage } from 'next'
import {
  LogoutIcon,
  StatusOnlineIcon,
  DocumentTextIcon,
} from '@heroicons/react/solid'
import Layout from '../components/Layout'
import { supabase } from '../utils/supabase'
import { TaskList } from '../components/TaskList'
import { TaskForm } from '../components/TaskForm'

const Dashboard: NextPage = () => {
  const signout = () => {
    supabase.auth.signOut()
  }

  return (
    <Layout title="Dashboard">
      <LogoutIcon
        className="mb-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signout}
      />
      <div className="grid grid-cols-2 gap-40">
        <div>
          <div className="my-3 flex justify-center">
            <DocumentTextIcon className="y-8 h-8 text-blue-500" />
          </div>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
