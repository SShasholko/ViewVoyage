# ViewVoyage | Simple Photo Stock

ViewVoyage is your go-to platform for discovering and downloading high-quality photos. Designed with simplicity in mind, it offers an intuitive browsing experience, allowing you to find inspiring images effortlessly. Start your visual journey today on ViewVoyage.

Visit the site here: [ViewVoyage](https://sshasholko.github.io/ViewVoyage/)

![Mockup](https://viewvoyage.s3.eu-north-1.amazonaws.com/mockup-vv.png)


## Project Goals

### Goals for Users
- **Discover Quality Photos**: Provide an easy-to-navigate platform to find high-quality, royalty-free images.
- **Simplified Downloads**: Ensure a straightforward process for downloading images without hassle.
- **Inspiration**: Serve as a source of creative inspiration through a diverse collection of photos.

### Goals for Developer
- **Enhance API Integration**: Optimize the use of external APIs to efficiently fetch and display photos.
- **Improve User Interface**: Continuously refine the front-end design for a seamless user experience.
- **Performance Optimization**: Ensure fast loading times and smooth browsing by optimizing code and assets.
- **Learn and Grow**: Gain expertise in API usage, front-end development, and user-centric design principles.

## Design Choices
### Fonts
- **Bebas Neue**: This sans-serif font is known for its bold and uppercase letters, offering a strong and modern look. It is primarily used for headings and titles to create a striking visual impact and enhance readability. [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue?query=Bebas+Neue)
- **Poppins**: This geometric sans-serif font is utilized for the body text and subheadings. Known for its clean and contemporary design, Poppins ensures excellent legibility and a smooth reading experience across all devices. [Poppins](https://fonts.google.com/specimen/Poppins?query=Poppins)

### Icons
- **Icons** for the project are sourced from [Flowbite Icons](https://flowbite.com/icons/).

### Color Scheme
![Colors](https://viewvoyage.s3.eu-north-1.amazonaws.com/colors-vv.png)
- **Text (#2f4858)**: Primary text color for the project. This dark blue ensures clear and easy reading against the light background.
- **Titles**:
    - **First Screen (#ffffff)**: White text is likely used for the main title displayed on the overall background, offering high contrast and prominence.
    - **Popup Window (#212529)**: Titles within the popup window itself use a dark gray, providing a more subtle contrast.
- **Buttons & Icons (#00c6bf)**: A vibrant light blue is used for button and icon. This distinct color makes them visually appealing and encourages user interaction.
- **Background (#f2f6f8)**: A very light gray sets a clean and airy backdrop for the popup window's content.
- **Borders (#cccccc)**: Light gray borders create a subtle definition around input elements on the popup window, separating them from background.

### Images
- **The images** used within this project were sourced from Pexels ([Pexels](https://www.pexels.com/)). Pexels offers a vast library of high-quality images under a permissive license.

## Wireframes
Wireframes for the website were created using [Milanote](https://milanote.com/). The wireframes encompass the first screen, gallery, and feedback modal window, designed for both desktop and mobile versions of this photo stock project.

[Look at site's Skatch online ](https://app.milanote.com/1SbBnD1MVSoi79?p=UtPKmOtEZ3i)

![Sketch](https://viewvoyage.s3.eu-north-1.amazonaws.com/canvas_viewvoyage.png)

## Features
The photo stock project ViewVoyage offers a streamlined user experience with simple yet effective features. Upon landing on the platform's first screen, users encounter a convenient search input, enabling quick access to desired images. The gallery seamlessly displays images sourced from Pexels.com via API integration, providing users with a diverse selection of high-quality visuals. Additionally, users can easily provide feedback through a user-friendly form accessible within a popup window. Below are some key features included in the website:

### First Screen
- **Logo** Positioned at the top left corner, a simple yet distinctive logo serves as a visual marker on the interface, adding a touch of identity to the design.
- **Feedback Modal Button** Positioned at the top right corner, a button prompts users to engage with the feedback system, conveniently accessible within a modal window.
![Logo+Feedback Modal Button](https://viewvoyage.s3.eu-north-1.amazonaws.com/logo-vv.png)
- **Search Input** Located at the center of the first screen, a straightforward input element is prominently displayed, accompanied by a search icon. This minimalist design ensures ease of use and intuitive navigation for users seeking specific images within the photo stock.
![Search Input](https://viewvoyage.s3.eu-north-1.amazonaws.com/search-vv.png)
- **Animation and Background Photo Transition** One of the standout features of the first screen is its captivating animation, inspired by the tutorial provided by [LunDev](https://www.youtube.com/watch?v=qome_iWFKSk&t=124s&ab_channel=LunDev). This animation adds a layer of dynamism and interactivity, enhancing the overall aesthetic appeal of the interface. Users can seamlessly transition between background photos by clicking buttons positioned on the left and right sides of the screen. This fluid movement not only enriches the visual experience but also keeps users engaged.
<img src="/img/animation-fs.gif">

- **Desktop and Mobile Optimization** The animation and overall design are optimized for both desktop and mobile versions, ensuring a consistent experience across all devices.
<img src="/img/animation-fs-mobile.gif" center>

### Gallery
- **Initial Display**:
    - Displays 15 random photos upon page load.
    ![Gallery](https://viewvoyage.s3.eu-north-1.amazonaws.com/gallery-vv.png)
    - Photos are sourced from Pexels.com using the [Pexels API](https://www.pexels.com/api/documentation/?#photos-search).
- **Photo Details**:

    ![Photo](https://viewvoyage.s3.eu-north-1.amazonaws.com/photo-vv.png)
  
    - Each photo is accompanied by the author's name.
    - A "Download Photo" button is available next to each photo, allowing users to download the image.
    - Clicking on a photo opens it in a new tab in full size.
    ![Photo Full Size](https://viewvoyage.s3.eu-north-1.amazonaws.com/photo-fs.png)
- **Search Functionality**:
    - **Empty Input**: No action is taken if the search button is pressed with an empty input field.
    - **Invalid Input**: A message is displayed indicating no pictures match the request if the input is incorrect, contains mistakes, or is random.
    ![Invalid Input](https://viewvoyage.s3.eu-north-1.amazonaws.com/no-photo.png)
    - **Valid Input**: The gallery updates to show photos relevant to the user's search term.
    ![Valid Input](https://viewvoyage.s3.eu-north-1.amazonaws.com/valid-input.png)
- **Load More Images**:
    - A "More" button is located at the bottom of the page.
    - Pressing this button loads additional images based on the user's search term.
    ![More Button](https://viewvoyage.s3.eu-north-1.amazonaws.com/more-bt.png)

### Feedback Form in Popup Window
![Feedback Form in Popup Window](https://viewvoyage.s3.eu-north-1.amazonaws.com/form-vv.png)
- **Opening and Closing**
    - The feedback form is accessible via a button on the first screen.
    - Users can close the form by clicking the "Close" button or by clicking on the area around the form.
- **Form Details**:
    - The form is connected to Formspree.io, which sends an email notification upon message submission.
    ![Feedback Form in Popup Window](https://viewvoyage.s3.eu-north-1.amazonaws.com/Subm-form.png)
    - All input fields are mandatory and must be filled out to send the form.
    ![Fields are mandatory](https://viewvoyage.s3.eu-north-1.amazonaws.com/mandatori-filds.png)
- **Submission and Confirmation**:
    - Once the user submits the form, a confirmation window appears, informing them that their message has been sent successfully.
    ![Submission](https://viewvoyage.s3.eu-north-1.amazonaws.com/form-subm.png)


## Technologies Used
The website was built using a variety of technologies and tools to ensure a seamless user experience and robust functionality:
- **HTML**: Used for structuring the content and layout of the web pages.
- **CSS**: Employed for styling and enhancing the visual appearance of the website.
- **JavaScript**: Employed for adding interactivity and dynamic functionality to the user interface, ensuring a smooth and responsive user experience.
- [Visual Studio Code](https://code.visualstudio.com/): Used as the primary code editor for development, offering a robust and versatile environment with extensive features and extensions.
- [Milanote](https://milanote.com/): Utilized for visual planning and wireframing.
- [Google Fonts](https://fonts.google.com/): Integrated for access to a diverse selection of web fonts to enhance typography.
- [Flowbite Icons](https://flowbite.com/icons/): Utilized for incorporating high-quality, customizable icons throughout the project to enhance visual appeal and user experience.
- [GitHub](https://github.com/): Used for version control and hosted the website.
- **Chrome DevTools**: Employed for debugging, testing, and optimizing the website's performance during development.
- [AWS (Amazon Web Services)](https://aws.amazon.com/): Storing images for Readme file
- [JSHint](https://jshint.com/): Utilized for static code analysis to detect errors and potential problems in JavaScript code, ensuring code quality and consistency.
- [W3C Markup Validator](https://validator.w3.org/): Utilized to validate the HTML code and ensure compliance with web standards.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): Used to validate the CSS code and ensure adherence to best practices and standards.
