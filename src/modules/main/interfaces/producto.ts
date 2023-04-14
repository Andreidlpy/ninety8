export interface Welcome {
    count: number;
    productos:  Producto[];
    id:        number;
    subtotal:  string;
    total:     string;
    sessionId: string;
    createdAt: Date;
    updatedAt: Date;
    Detalles:  Detalle[];
}

export interface Producto {
    id:          number;
    nombre:      string;
    descripcion: string;
    precio:      string;
    descuento?:   null;
    image?:      string | undefined;
    createdAt:   Date;
    updatedAt:   Date;
    slug: string;
}
export interface Detalle {
    id:         number;
    subtotal:   number;
    precio:     string;
    cantidad:   number;
    carritoId:  number;
    createdAt:  Date;
    updatedAt:  Date;
    ProductoId: number;
    Producto:   Producto;
}

