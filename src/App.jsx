import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Search, Menu } from 'lucide-react'
import logoImage from './assets/imagevisa-2.png'
import parliamentImage from './assets/parliament_building.png'
import economicPlanImage from './assets/economic_plan.jpeg'
import genderViolenceImage from './assets/gender_based_violence.jpeg'
import './App.css'

function App() {
  const [selectedApplication, setSelectedApplication] = useState('')

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <img src={logoImage} alt="Canada Visa Check" className="h-12" />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-blue-900 text-white hover:bg-blue-800">
                <Menu className="w-4 h-4 mr-2" />
                MENU
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search IRCC"
                className="pr-12 border-orange-300 focus:border-orange-500"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            How to check your application status
          </h1>
          <p className="text-gray-600 mb-8">
            Select your application type to find out how to check your application status.
          </p>

          {/* Application Selection Form */}
          <div className="bg-white border rounded-lg p-6 mb-8">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                *What did you apply for? (required)
              </label>
              <Select value={selectedApplication} onValueChange={setSelectedApplication}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Make your selection..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immigration">Immigration and citizenship</SelectItem>
                  <SelectItem value="visitor">Visitor visa</SelectItem>
                  <SelectItem value="work">Work permit</SelectItem>
                  <SelectItem value="study">Study permit</SelectItem>
                  <SelectItem value="permanent">Permanent residence</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-gray-700 hover:bg-gray-800 text-white">
              Continue
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Jobs</h3>
              <p className="text-sm text-gray-600">
                Find a job, training, hiring programs, work permits, Social Insurance Number (SIN)
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Immigration and citizenship</h3>
              <p className="text-sm text-gray-600">
                Visit, work, study, immigrate, refugees, permanent residents, apply, check status
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Travel and tourism</h3>
              <p className="text-sm text-gray-600">
                In Canada or abroad, advice, advisories, passports, visit Canada, events, attractions
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Business and industry</h3>
              <p className="text-sm text-gray-600">
                Starting a business, permits, copyright, business support, selling to government
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Benefits</h3>
              <p className="text-sm text-gray-600">
                EI, family and sickness leave, child benefit, pensions, housing, student aid, disabilities, after a death
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Health</h3>
              <p className="text-sm text-gray-600">
                Food, nutrition, diseases, vaccines, drugs, product safety and recalls
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Taxes</h3>
              <p className="text-sm text-gray-600">
                Income tax, payroll, GST/HST, contribution limits, tax credits, charities
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Environment and natural resources</h3>
              <p className="text-sm text-gray-600">
                Weather, climate, agriculture, wildlife, pollution, conservation, fisheries
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">National security and defence</h3>
              <p className="text-sm text-gray-600">
                Military, transportation and cyber security, securing the border, counter-terrorism
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Culture, history and sport</h3>
              <p className="text-sm text-gray-600">
                Arts, media, heritage, official languages, national identity and funding
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Policing, justice and emergencies</h3>
              <p className="text-sm text-gray-600">
                Safety, justice system, prepare for emergencies, services for victims of crime
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Transport and infrastructure</h3>
              <p className="text-sm text-gray-600">
                Aviation, marine, road and rail, car seat and vehicle recalls
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Indigenous peoples</h3>
              <p className="text-sm text-gray-600">
                Programs and services for First Nations, Inuit and Métis
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Veterans and military</h3>
              <p className="text-sm text-gray-600">
                Services for current and former military, RCMP and their families
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Youth</h3>
              <p className="text-sm text-gray-600">
                Programs and services for teenagers and young adults
              </p>
            </div>
          </div>

          {/* Parliament Building Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your government</h2>
              <div className="space-y-2">
                <a href="#" className="block text-blue-600 hover:underline">About government</a>
                <a href="#" className="block text-blue-600 hover:underline">Open government and data</a>
                <a href="#" className="block text-blue-600 hover:underline">Working for the government</a>
                <a href="#" className="block text-blue-600 hover:underline">Treaties, laws and regulations</a>
                <a href="#" className="block text-blue-600 hover:underline">Contact us</a>
                <a href="#" className="block text-blue-600 hover:underline">News</a>
                <a href="#" className="block text-blue-600 hover:underline">Prime Minister</a>
                <a href="#" className="block text-blue-600 hover:underline">Departments and agencies</a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={parliamentImage} alt="Parliament Building" className="w-full rounded-lg" />
            </div>
          </div>

          {/* Government Initiatives */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Government initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-100 rounded-lg overflow-hidden">
                <img src={economicPlanImage} alt="Economic Plan" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Update on the Government's economic plan
                  </h3>
                  <p className="text-sm text-gray-600">
                    The next phase of the Government's economic plan to help create good jobs, build more homes, and make life more affordable
                  </p>
                </div>
              </div>
              <div className="bg-purple-100 rounded-lg overflow-hidden">
                <img src={genderViolenceImage} alt="Gender-based Violence" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Take action against gender-based violence
                  </h3>
                  <p className="text-sm text-gray-600">
                    Together, let's listen, learn and act during the 16 Days of Activism Against Gender-based Violence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Immigration and citizenship</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Help Centre</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Check Your Visa</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">All contacts</a></li>
                <li><a href="#" className="hover:underline">Jobs</a></li>
                <li><a href="#" className="hover:underline">Immigration and citizenship</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Departments and agencies</a></li>
                <li><a href="#" className="hover:underline">Taxes</a></li>
                <li><a href="#" className="hover:underline">Environment and natural resources</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">About government</a></li>
                <li><a href="#" className="hover:underline">Canada and the world</a></li>
                <li><a href="#" className="hover:underline">Money and finance</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

