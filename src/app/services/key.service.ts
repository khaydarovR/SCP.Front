import { Injectable } from '@angular/core';
import {IPatchPerDTO} from "../remote/dto/PatchPerDTO";
import {API_BASE_URL} from "../data/myConst";
import {HttpClient} from "@angular/common/http";
import {PageNotifyService} from "./page-notify.service";
import {ICreateApiKeyDTO} from "../remote/dto/ICreateApiKeyDTO";
import {IApiKeyResponse} from "../remote/response/ApiKeyResponse";

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  constructor(private client: HttpClient, private notify: PageNotifyService) { }

  public createApiKey(request: ICreateApiKeyDTO){
    const url = API_BASE_URL + 'api/ApiKey/Create';
    return this.client.post<boolean>(url, request)
  }

  public GetMyKeys(){
    const url = API_BASE_URL + 'api/ApiKey/GetMy';
    return this.client.get<IApiKeyResponse[]>(url)
  }

  public Delete(kId: string){
    const url = API_BASE_URL + 'api/ApiKey/Delete';
    return this.client.post<boolean>(url, {}, {params: {keyId: kId}})
  }

  public blockKey(kId: string, isBlock: boolean){
    const url = API_BASE_URL + 'api/ApiKey/Block';
    return this.client.post<boolean>(url, {}, {
      params: {
        keyId: kId,
        isBlock: isBlock
      }
    })
  }

}
