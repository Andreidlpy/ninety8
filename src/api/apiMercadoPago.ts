
import mercadopago from 'mercadopago';


export function configureMercadoPago() {
    // Configurar credenciales de MercadoPago
    mercadopago.configure({
      access_token: 'ACCESS_TOKEN',
      integrator_id: 'INTEGRATOR_ID',
    });
  
    return mercadopago;
}