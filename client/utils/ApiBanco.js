export default class ApiBanco {
  constructor() {
    this.url = 'https://tipodecambio.paginasweb.cr/api';
    this.compra = null;
    this.venta = null;
    this.fecha = null;
  }

  async getInformacionCambioMoneda() {
    try {
      const requestUrl = `https://tipodecambio.paginasweb.cr/api`;
      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      });
      const data = await response.json();
      this.compra = data.compra;
      this.venta = data.venta;
      this.fecha = data.fecha;
      return data;
    } catch (error) {
      console.error
      return null;
    }
  }

  async getCambioVenta() {
    await this.getInformacionCambioMoneda();
    return this.venta;
  }

  async colonesToDolares(colones) {
    const venta = await this.getCambioVenta();
    const precioDolar = colones / venta;
    const precioDolarFixed = precioDolar.toFixed(2);
    return precioDolarFixed;
  }
}