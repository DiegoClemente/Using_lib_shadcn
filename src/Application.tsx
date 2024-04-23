import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Search } from "lucide-react";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";



export function Application() {

    const [filtro, setFiltro] = useState('');
    const [filtroId, setFiltroId] = useState('');

    const itensTable = Array.from({ length: 50 })
    .map((_, i) => ({
      id: `dfisdifdjsifp020229031${i}`,
      produto: `Produto ${i}`,
      preco: `R$ 100,00`
    }))
    .filter(item => 
      item.produto.toLowerCase().includes(filtro.toLowerCase()) &&
      item.id.toLowerCase().includes(filtroId.toLowerCase())
    )
    .map(item => (
      <TableRow key={item.id}>
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.produto}</TableCell>
        <TableCell>{item.preco}</TableCell>
      </TableRow>
    )) 

  return (

    <>

        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    
            <div className="text-right flex justify-end gap-3 p-4 items-center">
                
                Theme: 
                <div>
                    <ModeToggle />
                </div>

            </div>
        </ThemeProvider>

        <div className="p-6 max-w-5xl mx-auto space-y-4">

            <h1 className="text-3xl font-bold">Products</h1>

            <div className="flex items-center justify-between">
                <form className="flex items-center gap-2">
                    <Input name="id" placeholder="ID order" value={filtroId}
                        onChange={e => setFiltroId(e.target.value)} />
                    <Input name="name" placeholder="product name"
                        value={filtro}
                        onChange={e => setFiltro(e.target.value)}
                    >
                    </Input>
                    <Label className="size-full flex items-center justify-center">
                        <Search className="w-4 h-4 mr-2 " />
                        Search
                    </Label>
                </form>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Add Product</Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add product</DialogTitle>
                            <DialogDescription>
                                Make changes to your product here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" className="col-span-3" />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="price" className="text-right">
                                    Price
                                </Label>
                                <Input id="price" className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="border rounded-lg p-2">
                <Table>
                    <TableHeader>
                        <TableHead>ID</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>Price</TableHead>
                    </TableHeader>
                    <TableBody>
                        {itensTable}
                    </TableBody>
                </Table>
            </div>

        </div> 
    </>
  )
}
