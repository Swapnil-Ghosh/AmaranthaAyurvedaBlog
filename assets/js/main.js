/*
  Project Name : Extra Large Multipurpose HTML Template
  Author Company : dizzmarket
  Project Date: 01 Jan, 2017
  Author Email : dizzmarket@gmail.com
*/
/*
  Project Name : Extra Large Multipurpose HTML Template
  Author Company : dizzmarket
  Project Date: 01 Jan, 2017
  Author Email : dizzmarket@gmail.com
*/

// IIFE function start here
( function( ) {
    "use strict";

    /* page loder start here */
    jQuery( window ).on( 'load', function ( ) {
        jQuery( '.preloader-wrapper' ).fadeOut( );
        jQuery( '#about .heding-wrapper' ).addClass( 'animated' );
        var scrollEvent = new Event( 'scroll' );
        window.dispatchEvent( scrollEvent );
    } );

	jQuery( document ).ready( function( jQuery ) {

        jQuery( '#portfolio-list' ).filterable( { useHash: false } );

        var body = jQuery( 'body' ),
            win = jQuery( window ),
            winWidth;

        win.on( 'load', function( ) {
            winWidth = win.width( );
        } );

        win.on( 'resize', function( ) {
            winWidth = win.width( );
        } );

        // Theme options bar
        if ( jQuery( '#st-container' ).length ) {
            var patternsList = jQuery( '.patterns-list' );

            jQuery( '.toggle-panel, .st-pusher' ).on( 'click', function( ) {
                jQuery( '.st-container' ).toggleClass( 'st-menu-open' );
            } );

            function buttonActive( item ) {
                item.parent( ).find( '.item' ).removeClass( 'active' );
                item.addClass( 'active' );
            }

            function itemActive( item ) {
                item.closest( '.items-switcher' ).find( '.item' ).removeClass( 'active' );
                item.addClass( 'active' );
            }

            // Wide/Boxed type
            jQuery( '.wide-boxed-section' ).on( 'click', '.item', function( ) {
                buttonActive( jQuery( this ) );
                body.removeClass( ).addClass( jQuery( this ).attr( 'data-item' ) );
                body.attr( 'style', 'background-image: url(' + patternsList.find( '.active' ).data( 'path' ) + ');' )
                    .attr( 'data-bg-type', 'pattern' );
                var resizeEvent = new Event( 'resize' );
                window.dispatchEvent( resizeEvent );
            } );

            // Colors switcher
            jQuery( '.colors-list' ).on( 'click', '.item', function( event ) {
                var that = jQuery( this ),
                    colorPath = that.data( 'color-path' ),
                    logoPath = that.data( 'logo-path' ),
                    footerLogoPath = that.data( 'footer-logo-path' );
                itemActive( that );
                jQuery( '#color-file' ).attr( 'href', colorPath );
                jQuery( '.logo-container img' ).attr( 'src', logoPath );
                jQuery( '.footer-logo img' ).attr( 'src', footerLogoPath );
            } );

            // Header positions switcher
            jQuery( '.header-positions' ).on( 'click', '.item', function( ) {
                buttonActive( jQuery( this ) );
                var header = jQuery( '.slider-wrapper header' );
                header.attr( 'data-position', jQuery( this ).attr( 'data-item' ) );
            } );

            // Patterns switcher
            patternsList.on( 'click', '.item', function( event ) {
                var that = jQuery( this ),
                    path = that.data( 'path' );
                itemActive( that );
                body.attr( 'data-bg-type', 'pattern' ).attr( 'style', 'background-image: url(' + path + ');' );
            } );

            // Backgrounds switcher
            jQuery( '.backgrounds-list' ).on( 'click', '.item', function( event ) {
                var that = jQuery( this ),
                    path = that.data( 'path' );
                itemActive( that );
                body.attr( 'data-bg-type', 'background' ).attr( 'style', 'background-image: url(' + path + ');' );
            } );
        }

        // Function remove by timer for success or error AJAX finish
        function removeByTimer( selector, timeout ) {
            setTimeout( function( ) {
                selector.remove( );
            }, timeout );
        }

        // Function append alert for success or error AJAX finish
        function appendAllert( message ) {
            body.append( '<div class="form-alert c-table">' +
                            '<div class="c-row">' +
                                '<div class="c-cell">' +
                                    '<div class="alert-content">' + message + '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' );
            removeByTimer( body.find( '.form-alert' ), 1500 );
        }

        // Sub menu
        jQuery( '.cd-primary-nav .has-sub > a' ).on( 'click', function( event ) {
            event.preventDefault( );
            jQuery( this ).next( ).slideToggle( 300 );
        } );

        // Send form
        jQuery( '#contact-form .submit' ).on( 'click', function( event ) {
            event.preventDefault( );
            var nameField = jQuery( '#contact-form .name' ),
                emailField = jQuery( '#contact-form .email' ),
                messageField = jQuery( '#contact-form .message' ),
                nameData = nameField.val( ),
                emailData = emailField.val( ),
                messageData = messageField.val( ),
                successMessage = 'The message has been sent',
                errorMessage = 'The message hasn\'t been sent';
                nameField.add( emailField ).add( messageField ).val( '' );

            if ( !nameData || !emailData || !messageData ) {
                appendAllert( errorMessage );
                return;
            }

            jQuery.post( '../assets/php/mail.php', {
                    name: nameData,
                    email: emailData,
                    message: messageData,
                } ).done( function( data, textStatus ) {
                    appendAllert( successMessage )
                } ).fail( function( xhr, status, error ) {
                    appendAllert( errorMessage )
                } );
        } );

    	// start gallery and images view here
        jQuery( '.gallery:first a[class^="pretty"]' ).prettyPhoto( {
            animation_speed: 'normal',
            theme: 'light_square',
            slideshow: 3000,
            autoplay_slideshow: false,
            social_tools: false,
            deeplinking: false,
        } );
    	// Navigation script here
        jQuery( '.cd-primary-nav li:not(.has-sub) a' ).on( 'click', function( ) {
            jQuery( '.cd-primary-nav' ).removeClass( 'is-visible' );
            jQuery( '.cd-menu-icon' ).removeClass( 'is-clicked' );
        } );
        // Adding active class for navigation here
        jQuery( '.main-nav a' ).on( 'click', function( ) {
            jQuery( '.main-nav li' ).removeClass( 'active' );
            jQuery( this ).parent( ).addClass( 'active' );
        } );
    	// Start portfolio Filter here
        jQuery( '#portfolio-filter a' ).on( 'click', function( ) {
          jQuery( '#portfolio-filter li' ).removeClass( 'active' );
          jQuery( this ).parent( ).addClass( 'active' );
        } );
        // Start SCROLL TO FIX HEADER
        jQuery( window ).on( 'scroll', function( ) {
            if ( jQuery(window).scrollTop() >= 41 ) {
                jQuery( 'header' ).addClass( 'sticky' );
            } else {
                jQuery( 'header' ).removeClass( 'sticky' );
            }
        } );
        // Show element on scroll
        var elems = jQuery( '.animate-in' ),
        winheight = jQuery( window ).height( ),
        fullheight = jQuery( document ).height( );

        jQuery( window ).on( 'scroll', function( ) {
            animate_elems( );
        } );

        function animate_elems( ) {
            var wintop = jQuery( window ).scrollTop( ); // calculate distance from top of window
            // loop through each item to check when it animates
            elems.each( function( ) {
                var element = jQuery( this ),
                topcoords = element.offset( ).top; // element's distance from top of page in pixels
                if( wintop > ( topcoords - ( winheight * .90 ) ) ) {
                // animate when top of the window is 3/4 above the element
                element.addClass( 'animated' );
                }
            } );
        } // end animate_elems()

        // SCROLL TO TARGET
        jQuery( '.scroll' ).on( 'click', function( event ) {
             event.preventDefault( );
             //calculate destination place
             var dest = 0;
             if( jQuery( this.hash ).offset( ).top > jQuery( document ).height( ) - jQuery( window ).height( ) ) {
                  dest = jQuery( document ).height( ) - jQuery( window ).height( );
             } else {
                  dest = jQuery( this.hash ).offset( ).top;
             }
             //go to destination
             jQuery( 'html,body' ).animate( { scrollTop: dest }, 600, 'swing' );
        } );

        // Slider Start here
        jQuery( '#main-slider' ).owlCarousel( {
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: true ,
        } );
        jQuery( '#testimonial-slide' ).owlCarousel( {
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: true,
        } );
        jQuery( '#client-slider' ).owlCarousel( {
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            autoPlay: true,
            items: 4,
            itemsDesktop: [1199,3],
            itemsDesktopSmall: [979,3]
        } );

        // Fancybox start here
        jQuery( '.fancybox' ).fancybox( );

        //open/close primary navigation
        jQuery( '.cd-primary-nav-trigger' ).on( 'click', function( ) {
            jQuery( '.cd-menu-icon' ).toggleClass( 'is-clicked' );

            //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
            if ( jQuery( '.cd-primary-nav' ).hasClass( 'is-visible' ) ) {
                jQuery( '.cd-primary-nav' ).removeClass( 'is-visible' ).one( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function( ) {
                    jQuery( 'body' ).removeClass( 'overflow-hidden' );
                } );
            } else {
                jQuery( '.cd-primary-nav' ).addClass( 'is-visible' ).one( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function( ) {
                    jQuery( 'body' ).addClass( 'overflow-hidden' );
                } );
            }
        } );


        // Master Slider start here

        var slider = new MasterSlider( );
            slider.setup( 'masterslider', {
              width: 1170,
              height: 770,
              autoplay: true,
              fullwidth: true,
              centerControls: false,
              speed: 55,
              view: 'flow',
              loop: true,
            } );
            slider.control( 'arrows' );
            var slider1 = new MasterSlider( );
            slider1.setup( 'masterslider-about', {
              width: 568,
              height: 333,
              autoplay: true,
              fullwidth: true,
              centerControls: false,
              speed: 55,
              view: 'basic',
              loop: true
            } );
            slider1.control( 'arrows' );


        //Check to see if the window is top if not then display button
        jQuery( window ).on( 'scroll', function( ) {
            if ( jQuery( this ).scrollTop( ) > 100 ) {
                jQuery( '.scrollToTop' ).fadeIn( );
            } else {
                jQuery( '.scrollToTop' ).fadeOut( );
            }
        } );

        //Click event to scroll to top
        jQuery( '.scrollToTop' ).on( 'click', function( ) {
            jQuery( 'html, body' ).animate( { scrollTop : 0 }, 600 );
            return false;
        } );

        //start tabs here
    	var tabs =  jQuery( '.tabs li a' );
    	tabs.on( 'click', function( ) {
    		var panels = this.hash.replace( '/','' );
    		tabs.removeClass( 'active' );
    		jQuery( this ).addClass( 'active' );
            jQuery( '#panels' ).find( 'p' ).hide( );
            jQuery( panels ).fadeIn( 200 );
    	} );

        jQuery( '#tabex a' ).on( 'click', function( e ) {
            e.preventDefault( );
            jQuery( this ).tab( 'show' );
        } );
    } );
} ) ( );
