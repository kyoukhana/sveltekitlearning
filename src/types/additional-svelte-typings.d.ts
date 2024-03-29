declare namespace svelteHTML {
    // enhance elements
    interface IntrinsicElements {
        'my-custom-element': { someattribute: string; 'on:event': (e: CustomEvent<any>) => void };
    }
    // enhance attributes
    interface HTMLAttributes<HTMLDivElement> {
        // If you want to use on:beforeinstallprompt
        'on:beforeinstallprompt'?: (event: any) => any;
        // If you want to use myCustomAttribute={..} (note: all lowercase)
         'on:outofview'?: (event) => void;
        // You can replace any with something more specific if you like
    }
}