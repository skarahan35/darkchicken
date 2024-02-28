import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { DcToastComponent } from '../components/atoms/toast/dc-toast.component';
import { ToastCloseButtonPositionType, ToastPositionType, ToastType } from '../types/dc-types';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    constructor(
        private resolver: ComponentFactoryResolver,
        private applicationRef: ApplicationRef,
        private injector: Injector
    ) { }

    use(type?: ToastType, content?: string, time?: number, position?: ToastPositionType, closeButton?: boolean, 
        closeButtonPosition?: ToastCloseButtonPositionType, allowTimeBar?: boolean) {

            const factory = this.resolver.resolveComponentFactory(DcToastComponent)
            const componentRef: ComponentRef<DcToastComponent> = factory.create(this.injector)
            if(componentRef.instance.flag){
                type ? componentRef.instance.type = type : null
            content ? componentRef.instance.content = content : null
            time ? componentRef.instance.time = time : null
            position ? componentRef.instance.position : null
            closeButton ? componentRef.instance.closeButton = closeButton : null
            closeButtonPosition ? componentRef.instance.closeButtonPosition : null
            allowTimeBar ? componentRef.instance.allowTimeBar : null
            
            this.applicationRef.attachView(componentRef.hostView)
            const domElement = (componentRef.hostView as any).rootNodes[0] as HTMLElement
            document.body.appendChild(domElement)
            }
            // type ? componentRef.instance.type = type : null
            // content ? componentRef.instance.content = content : null
            // time ? componentRef.instance.time = time : null
            // position ? componentRef.instance.position : null
            // closeButton ? componentRef.instance.closeButton = closeButton : null
            // closeButtonPosition ? componentRef.instance.closeButtonPosition : null
            // allowTimeBar ? componentRef.instance.allowTimeBar : null
            
            // this.applicationRef.attachView(componentRef.hostView)
            // const domElement = (componentRef.hostView as any).rootNodes[0] as HTMLElement
            // document.body.appendChild(domElement)
            componentRef.instance.toast()
    }

    showMessage(message: string): void {
        // DCToastComponent fabrikasını oluştur
        const factory = this.resolver.resolveComponentFactory(DcToastComponent);

        // Dynamic component'i oluştur
        const componentRef: ComponentRef<DcToastComponent> = factory.create(this.injector);

        // Input'a değeri ata
        // componentRef.instance.message = message;
        //componentRef.instance.message = componentRef.instance.dcService.hello('SELAMLAR')



        // Component'i view'a ekleyin
        this.applicationRef.attachView(componentRef.hostView);

        // Component'i DOM'a ekleyin
        const domElement = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElement);

        // // Belirli bir süre sonra component'i kaldır
        // setTimeout(() => {
        //   document.body.removeChild(domElement);
        //   this.applicationRef.detachView(componentRef.hostView);
        //   componentRef.destroy();
        // }, 5000); // Örnekte 5 saniye sonra kaldırılıyor, siz istediğiniz süreyi ayarlayabilirsiniz.
    }
}