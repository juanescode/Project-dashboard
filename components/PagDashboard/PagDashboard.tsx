import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"; // Asegúrate de importar el componente Separator

type Contact = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
};

type ContactModalProps = {
  contacts: Contact[];
};

const ContactModal: React.FC<ContactModalProps> = ({ contacts }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-3">Ver contactos</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Contactos</DialogTitle>
        <DialogDescription>
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <div key={contact.id} className="mt-2">
                <p>
                  <strong>Nombre:</strong> {contact.name}
                </p>
                <p>
                  <strong>Rol:</strong> {contact.role}
                </p>
                <p>
                  <strong>Email:</strong> {contact.email}
                </p>
                <p>
                  <strong>Teléfono:</strong> {contact.phone}
                </p>
                {index < contacts.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            ))
          ) : (
            <p>No hay contactos</p>
          )}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;