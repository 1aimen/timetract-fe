import React from 'react'
import Button from '../ui/button/Button'
import { Calendar, ChartBar, Clock, Repeat,  Users } from 'lucide-react'


export const QuickActions = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className='mb-4'>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Quick Actions
          </h3>
        </div>                <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start" >
                <Calendar className="w-4 h-4 mr-2" />
                Create Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start" >
                <Users className="w-4 h-4 mr-2" />
                Add Employee
              </Button>
              <Button variant="outline" className="w-full justify-start" >
                <Clock className="w-4 h-4 mr-2" />
                Review Timesheets
              </Button>
              <Button variant="outline" className="w-full justify-start" >
                <ChartBar className="w-4 h-4 mr-2" />
                View Reports
              </Button>
                    <Button variant="outline" className="w-full justify-start" >
                <Repeat className="w-4 h-4 mr-2" />
                Manage leaves
              </Button>
            </div>
          </div>
  )
}

export default QuickActions