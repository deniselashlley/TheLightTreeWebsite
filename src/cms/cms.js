import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutYogaPreview from "./preview-templates/AboutYogaPreview";
import ClassesPagePreview from "./preview-templates/ClassesPagePreview";
import TeachingPagePreview from "./preview-templates/TeachingPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import FooterPreview from "./preview-templates/FooterPreview";
import NavbarPreview from "./preview-templates/NavbarPreview";
import IntroductionPreview from "./preview-templates/IntroductionPreview";
import MyStoryPreview from "./preview-templates/MyStoryPreview";
import ContactPreview from "./preview-templates/ContactPreview";
import TestimonialsPreview from "./preview-templates/TestimonialsPreview";
import ServicesPreview from "./preview-templates/ServicesPreview";
import SchedulePreview from "./preview-templates/SchedulePreview";
import RichTextWidgetPreview from '../components/RichTextWidgetPreview';
import RichTextWidget from '../components/RichTextWidget'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)
CMS.registerWidget('richText', RichTextWidget, RichTextWidgetPreview);

CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("about", AboutYogaPreview);
CMS.registerPreviewTemplate("my-classes", ClassesPagePreview);
CMS.registerPreviewTemplate("teaching", TeachingPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("introduction", IntroductionPreview);
CMS.registerPreviewTemplate("mystory", MyStoryPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("testimonials", TestimonialsPreview);
CMS.registerPreviewTemplate("services", ServicesPreview);
CMS.registerPreviewTemplate("schedule", SchedulePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview)
