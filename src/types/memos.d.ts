export interface Memo {
  id: number;
  secretaria_id: number;
  detalle: string;
  estado_id: number;
  fecha: string;
  created_at: string;
}

export interface Estado {
  id: number;
  estado: string;
}
