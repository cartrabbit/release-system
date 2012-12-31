<?php
/**
 * @package AkeebaReleaseSystem
 * @copyright Copyright (c)2010-2013 Nicholas K. Dionysopoulos
 * @license GNU General Public License version 3, or later
 */

defined('_JEXEC') or die();

class ArsHelperHtml
{
	/**
	 * Processes the message, replacing placeholders with their values and running any
	 * plug-ins
	 * @param string $message The message to process
	 * @param string $context The context of the message to process
	 * @return string The processed message
	 */
	static public function preProcessMessage($message, $context = 'com_ars.message')
	{
		// Parse [SITE]
		$site_url = JURI::base();
		$message = str_replace('[SITE]', $site_url, $message);

		// Run content plug-ins
		$message = JHTML::_('content.prepare', $message, null, $context);

		// Return the value
		return $message;
	}

	static public function sizeFormat($filesize)
	{
		if($filesize > 1073741824) {
			return number_format($filesize / 1073741824, 2)." Gb";
		} elseif($filesize >= 1048576) {
			return number_format($filesize / 1048576, 2)." Mb";
		} elseif($filesize >= 1024) {
			return number_format($filesize / 1024, 2)." Kb";
		} else {
			return $filesize." bytes";
		}
	}
	
	static public function getEnvironments( $environments = null )
	{
		if(empty($environments)) return '';
		
		if (! class_exists( 'ArsHelperSelect' ) ) {
			require_once( JPATH_ADMINISTRATOR . '/components/com_ars/helpers/select.php' );
		}
		
		if ( is_string( $environments ) ) $environments = json_decode( $environments );
		
		$data = null;
		foreach ( $environments as $e ) {
			$data .= ArsHelperSelect :: environmenticon( $e, array( 'class' => 'ars-item-property-environment-icon' ) );
		}
		
		return $data;
	}
}