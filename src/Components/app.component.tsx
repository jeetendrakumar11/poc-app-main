import React from 'react';
import { ContentComponent } from './Content/content.component';
import { Footer } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';

export const AppComponent = () => {
    return (
        <div>
            <HeaderComponent />
            <ContentComponent />
            <Footer />
        </div>
    )
}