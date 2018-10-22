import { styled } from '../../Utilities';
import { IModalProps, IModalStyleProps, IModalStyles } from './Modal.types';
import { ModalBase } from './Modal.base';
import { getStyles } from './Modal.styles';
import { getParent } from '../../Utilities';

export const Modal = styled<IModalProps, IModalStyleProps, IModalStyles>(ModalBase, getStyles, undefined, {
  scope: 'Modal'
});

/**
 * Gets all of the sibling elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param child - The element to get the parent's siblings of.
 */
export function getSiblingsOfParent(child: HTMLElement): Element[] {
  const allSiblingsOfParents: Element[] = [];
  const parent = getParent(child, true);
  if (parent) {
    let sibling = parent.nextElementSibling;
    if (sibling) {
      while ((sibling = parent.nextElementSibling)) {
        // Step 2: filter out hidden
        if (!sibling.getAttribute('aria-hidden')) {
          allSiblingsOfParents.push(sibling);
        }
      }
    }
  }
  return allSiblingsOfParents;
}

export function hideSiblings(): void {
  // Step 1: find all of the parent's siblings, excluding this
  const allSiblingsOfParents = getSiblingsOfParent(this);
  // Step 3: mark filtered as hidden
  if (allSiblingsOfParents) {
    for (let i = 0; i < allSiblingsOfParents.length; i++) {
      allSiblingsOfParents[i].setAttribute('aria-hidden', 'true');
    }
  }
}

export function setSiblingsVisible(): void {
  // Step 4: when modal goes away call remove attribute
  const allSiblingsOfParents = getSiblingsOfParent(this);
  if (allSiblingsOfParents) {
    for (let i = 0; i < allSiblingsOfParents.length; i++) {
      allSiblingsOfParents[i].removeAttribute('aria-hidden');
    }
  }
}
