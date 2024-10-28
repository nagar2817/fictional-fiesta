import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
const DetailsDialog = ({ user }) => {
    return (
        <div className="bg-white text-black">
        <DialogHeader>
          <DialogTitle>{user.fist_name}</DialogTitle>
          <DialogDescription>
            {user.first_name}'s profile
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <p><strong>city:</strong> {user.city}</p>
        <p><strong>Phone:</strong> {user.contact_number}</p>
      </div>
      </div>
       
    );
};

export default DetailsDialog;
