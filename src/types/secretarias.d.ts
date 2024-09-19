export interface Secretaria {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
}

type Tipo =
  | "Dirección"
  | "Departamento"
  | "Subsecretaria"
  | "Coordinación"
  | "Jefatura";

export interface Dependencia {
  id: number;
  secretaria_id: number;
  tipo: Tipo;
  nombre: string;
  correo: string;
  telefono: number;
}
