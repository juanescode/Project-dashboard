"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Toast } from "@radix-ui/react-toast";

import { UploadButton } from "@/utils/uploadthing";

import { CompanyFormProps } from "./CompanyForm.types";
import { formSchema } from "./CompanyForm.form";
import { toast } from "@/components/ui/use-toast";

export function CompanyForm(props: CompanyFormProps) {
  const { company } = props;
  const router = useRouter();
  const [photoUploaded, setPhotoUploaded] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: company.name,
      description: company.description,
      country: company.country,
      website: company.website,
      phone: company.phone,
      profileImage: company.profileImage,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        await axios.patch(`/api/company/${company.id}`, values)
        toast({
            title: "Compañia actualizada!"
        })
        router.refresh()
    } catch (error) {
        toast({
            title: "Ocurrio un error",
            variant: "destructive"
        })
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la compañia</FormLabel>
                <FormControl>
                  <Input placeholder="Juanes..." type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pais </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione el pais" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="spain">España</SelectItem>
                    <SelectItem value="united-kingdon">
                      United kingdom
                    </SelectItem>
                    <SelectItem value="portugal">Portugal</SelectItem>
                    <SelectItem value="colombia">Colombia</SelectItem>
                    <SelectItem value="italy">Italy</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sitio web</FormLabel>
                <FormControl>
                  <Input
                    placeholder="www.juanescode.com"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefono</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+57 3204536789"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imagen de perfil</FormLabel>
                <FormControl>
                  <div>
                    {photoUploaded ? (
                      <p className="text-sm">Imagen subida exitosamente!</p>
                    ) : (
                      <UploadButton
                        className="bg-slate-600/20 text-slate-800 rounded-lg outline-dotted outline-3"
                        {...field}
                        endpoint="profileImage"
                        onClientUploadComplete={(res) => {
                          form.setValue("profileImage", res?.[0].url);
                          setPhotoUploaded(true);
                        }}
                        onUploadError={(error: Error) => {
                          toast({ title: "Error uploading photo" });
                        }}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description..." {...field} value={form.getValues().description ?? ''} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">
            Editar compañia
        </Button>
      </form>
    </Form>
  );
}
