<?php
/**
 * @package AkeebaReleaseSystem
 * @copyright Copyright (c)2010-2013 Nicholas K. Dionysopoulos
 * @license GNU General Public License version 3, or later
 * @version $Id$
 */

defined('_JEXEC') or die();

$rootURL = rtrim(JURI::base(),'/');
$subpathURL = JURI::base(true);
if(!empty($subpathURL) && ($subpathURL != '/')) {
	$rootURL = substr($rootURL, 0, -1 * strlen($subpathURL));
}

$categories = array('components','libraries','modules','packages','plugins','files','templates');
$tag = "<"."?xml version=\"1.0\" encoding=\"utf-8\""."?".">";

$dlid = trim(JRequest::getCmd('dlid',''));
if($dlid) {
	if(strlen($dlid) > 32) $dlid = substr($dlid,0,32);
	$dlid = '&dlid='.$dlid;
} else {
	$dlid = '';
}

@ob_end_clean();
@header('Content-type: application/xml');
?><?php echo $tag; ?>
<!-- Update stream generated automatically by Akeeba Release System -->
<extensionset name="<?php echo $this->updates_name ?>" description="<?php echo $this->updates_desc ?>">
<?php foreach($categories as $category):
$url=$rootURL.AKRouter::_('index.php?option=com_ars&view=update&format=xml&task=category&id='.$category.$dlid);
$url=str_replace('&', '&amp;', $url);
if(substr($url,-4) != '.xml') $url .= (strpos($url, '?') ? '&amp;' : '?').'dummy=extension.xml';
?><category name="<?php echo ucfirst($category)?>" description="<?php echo JText::_('LBL_UPDATETYPES_'.strtoupper($category)); ?>" category="<?php echo $category ?>" ref="<?php echo $url ?>" />
<?php endforeach ?>
</extensionset><?php JFactory::getApplication()->close(); ?>