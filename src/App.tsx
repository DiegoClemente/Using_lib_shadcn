import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Search, PlusCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "./components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

export function App() {

  const [filtro, setFiltro] = useState('');
  const [filtroId, setFiltroId] = useState('');

  const itensTable = Array.from({ length: 15 })
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
    <div className="p-6 max-w-5xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Produtos</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do pedido" value={filtroId} 
          onChange={e => setFiltroId(e.target.value)} />
          <Input name="name" placeholder="Nome do produto"
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
          >  
          </Input>
          <Label className="size-full flex items-center justify-center">
            <Search className="w-4 h-4 mr-2 "/>
            Pesquise
          </Label>
        </form> 

        <Dialog>
          <DialogTrigger asChild>
            <Button>
            <PlusCircle className="w-4 h-4 mr-2"/>
              Novo produto
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Novo Produto
              </DialogTitle>
              <DialogDescription>
                Criar um novo produto no sistema
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name">
                    Produto
                  </Label>
                  <Input className="col-span-3" id="name"/>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="price">
                    Preço
                  </Label>
                  <Input className="col-span-3" id="price"/>
                </div>

                <DialogFooter>
                  <Button type="submit">Salvar</Button>
                  <DialogClose>
                    <Button type="button" variant="outline">Cancelar</Button>
                  </DialogClose>
                </DialogFooter>

            </div>
          </DialogContent>

        </Dialog>
      </div>

      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme" children>
      </ThemeProvider>

      <ModeToggle />

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {itensTable}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
