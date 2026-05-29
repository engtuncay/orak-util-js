export class FiFetch {
  static postFormData(url: string, data: FormData) {
    return fetch(url, {
      method: 'POST',
      body: data
    });
  }

  /**
   * Post işlemi sonrası Response promise dönüş verir
   *
   * @param url
   * @param data
   */
  static postToResponse(url : string, data: Record<string, any>): Promise<Response> {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }

  // JSON POST işlemi için util fonksiyonu
  /**
   * Post işlemi sonrası json promise olarak dönüş verir
   *
   * @param url
   * @param data
   */
  static postToJson(url:string, data: Record<string, any>): Promise<any> {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

}