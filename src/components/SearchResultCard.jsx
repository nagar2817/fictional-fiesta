import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import DetailsDialog from "./DetailsDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SearchResultCard({ user }) {
  return (
    <div className="flex items-center justify-center min-h-screen"> {/* Centering container */}
      <Card className="w-[350px] flex flex-col border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <CardHeader className="flex items-start p-4 bg-white rounded-t-lg">
          <img
            src="https://loremflickr.com/320/240/cat" // Replace with your image URL
            alt="Icon"
            className="w-16 h-16 object-cover rounded-full border-2 border-gray-300"
          />
          <div className="ml-4">
            <CardTitle className="text-lg font-semibold text-gray-800">{user.first_name} {user.last_name}</CardTitle>
            <CardDescription className="text-gray-600">{user.city}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4 bg-gray-50">
          <div className="flex items-center text-gray-700 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6a9 9 0 009 9h0a9 9 0 009-9h0M3 6v6m9-3v3m-9 0h0a9 9 0 009 9m0-9a9 9 0 000-9M21 6v6" />
            </svg>
            <span>{user.city}</span>
          </div>
          <div className="flex items-center text-gray-700">
            
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v1h3v10H9m8-1h1V9h-1m-1 0h-1V7h1a2 2 0 012 2v7a2 2 0 01-2 2h-1v-2h1V9h-1" />
            </svg>
            <span>{user.contact_number}</span>
          </div>
          <Dialog>
            <DialogTrigger className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition">
              Fetch Details
            </DialogTrigger>
            <DialogContent>
              <DetailsDialog user={user} />
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}
