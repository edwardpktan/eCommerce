


const setModalShipping = () => {

    let shippingMesg = `                    
                    <p><h5>Order Processing Time</h5></p>
                    <p>We aim to process all orders within 1-2 business days. Business days exclude Saturdays, Sundays and public holidays.</p>
                    
                    <p><h5>Domestic Shipping Policy</h5></p>
                    <p>FREE shipping on all local orders, without minimum purchase.
                    Shipping rates and delivery estimates
                    Shipping charges for your order will be calculated and displayed at checkout.</p>

                    <table>
                        <tr>
                            <th>Shipment method (within Singapore)
                            </th>
                            <th>Estimated delivery time</th>
                            <th>Shipment cost</th>

                        </tr>   
                        <tr>
                            <td>SingPost Tracked Package / SmartPac (trackable)</td>
                            <td>2-4 business days</td>
                            <td>Free</td>
                        </tr>

                    </table>

                    <p><h5> International Shipping Policy</h5></p>
                    <p>FREE shipping worldwide on all orders ≥ $100 SGD.
                    For international orders under $100 SGD, airmail shipping is available at a flat rate of $15 SGD.</p>
                    <p><h5>Shipping rates and delivery estimates</h5></p>
                    <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
                    
                    <table>
                        <tr>
                            <th>Shipment method (International)
                            </th>
                            <th>Estimated delivery time</th>
                            <th>Shipment cost</th>

                        </tr>   
                        <tr>
                            <td>International - SingPost Registered Mail</td>
                            <td>8-14 business days</td>
                            <td>For orders ≥ $100 SGD -- Free
                                For orders under $100 SGD -- $15 SGD
                            </td>
                        </tr>

                    </table>

                    <p><h5>Shipment confirmation and order tracking</h5></p>
                    <p>You will receive a shipment notification e-mail once your order has been dispatched. The e-mail will contain the tracking information as well as a link to track your package online.</p>
                    <h5><p>Customs, duties, and taxes</h5></p>
                    <p>Please be aware that unforeseeable delays may be imposed by your country's customs clearance. Gent’s Accessories® is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).</p>
                    <h5><p>Damages</h5></p>
                    <p>Gent’s Accessories® is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier or our support team directly to file a claim. Please retain evidence of all packaging material and damaged goods before filing a claim.</p>
    `;


    document.querySelector(".modal-body").innerHTML = shippingMesg;
    document.querySelector(".modal-title").innerHTML = `<h4>Shipping Policy</h4>`;


}


const setModalRefund = () => {

    let refundMesg = `
                    <p><span>If you are not completely satisfied with your purchase, we offer a hassle-free return and refund policy.</span></p>

                    <h5>Eligibility</h5>

                    <p>To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Please note that some items, such as personalized or custom-made products, are not eligible for a refund.</p>

                    <h5>Returns</h5>
                    <p>To initiate a return, please contact our customer service team within 14 days of receiving your order. We will provide you with a return authorization number and instructions on how to return your item.</p>

                    <h5>Shipping Costs</h5>
                    <p>If your item is eligible for a refund, you will be responsible for the shipping costs associated with returning the item. Shipping costs are non-refundable.</p>

                    <h5>Refunds</h5>
                    <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                    If your refund is approved, it will be processed and a credit will automatically be applied to your original method of payment within a certain number of days, depending on your bank or credit card issuer.</p>

                    <h5>Late or Missing Refunds </h5>
                    <p>If you haven't received your refund yet, please check your bank account or contact your credit card company. It may take some time before your refund is officially posted.
                    If you've done all of this and you still have not received your refund, please contact our customer service team.</p>

                    <h5>Exchanges</h5>

                    <p>We do not offer exchanges at this time. If you would like a different size or color, please initiate a return and place a new order.</p>

                    <h5>Damaged or Defective Items</h5>
                    <p>If your item arrives damaged or defective, please contact our customer service team immediately. We will provide you with instructions on how to return the item for a replacement or refund.
                    If you have any further questions regarding our refund policy, please don't hesitate to contact our customer service team.</p>

    `;


    document.querySelector(".modal-body").innerHTML = refundMesg;
    document.querySelector(".modal-title").innerHTML = `<h4>Refund Policy</h4>`;


}

const setModalPrivacy = () => {

    let privacyMesg = `

                        <p>At our website, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information when you use our website.</p>

                        <p><h5>Information We Collect</h5></p>
                        <p>We collect various types of information when you use our website, including:</p>
                        <ul>
                            <li>Personal information, such as your name, email address, mailing address, phone number, and payment information</li>
                            <li>Non-personal information, such as your IP address, browser type, operating system, and website usage data</li>
                        </ul>

                        <p><h5>How We Use Your Information</h5></p>
                        <p>We use your information for the following purposes:</p>
                        <ul>
                            <li>To process your orders and provide customer service</li>
                            <li>To send you promotional offers and newsletters (you can opt out of these communications at any time)</li>
                            <li>To improve our website and the user experience</li>
                            <li>To comply with legal obligations and protect our rights and interests</li>
                        </ul>

                        <p><h5>How We Share Your Information</p></h5>
                        <p>We may share your information with the following third parties:</p>
                        <ul>
                            <li>Payment processors and shipping carriers to fulfill your orders</li>
                            <li>Service providers who assist us with website maintenance, analytics, and marketing</li>
                            <li>Law enforcement agencies, government officials, or other third parties as required by law or to protect our rights and interests</li>
                        </ul>
                        <p>We do not sell or rent your personal information to third parties for marketing purposes.</p>

                        <p><h5>Cookies</h5></p>
                        <p>We use cookies and similar technologies to enhance your browsing experience and provide personalized content and advertising. You can choose to disable cookies in your browser settings, but this may affect your ability to use certain features of our website.</p>

                        <p><h5>Security</h5></p>
                        <p>We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your information.</p>

                        <p><h5>Children's Privacy</h5></p>

                        <p>Our website is not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete the information as soon as possible.</p>

                        <p><h5>Changes to this Privacy Policy</h5></p>

                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued use of our website after any changes to this Privacy Policy will constitute your acceptance of such changes.</p>

                        <p><h5>Contact Us</h5></p>
                        <p>If you have any questions or concerns about this Privacy Policy, please contact us using the information provided on our website.</p>


    `;


    document.querySelector(".modal-body").innerHTML = privacyMesg;
    document.querySelector(".modal-title").innerHTML = `<h4>Privacy Policy</h4>`;


}

const displayDetails = (index) => {

    let productDisplayMesg = `


                            <div id="productImgContainer">
                            <img id="modalImg" src="${filteredProductList[index].product_url}" width=60% />
                            </div>
                            <hr>
                            <b>Description:</b> <span id="modalDescription">Sample Product Description</span> <br />
                            <b>Price: $</b><span id="modalPrice">69</span>
                            <form action="add-to-cart.php" method="post">
                                <b><label for="quantity">Quantity:</label><b/>
                                <input type="number" name="quantity" id="quantity" value="1" min="1" max="10">
                                <button type="submit">Add to Cart</button>
                            </form>


    `;


    document.querySelector(".modal-body").innerHTML = productDisplayMesg;
    document.querySelector(".modal-title").innerHTML = `<h4>${filteredProductList[index].productName}</h4>`;

    //When user clicks on any "More" button, the details of the selected product will be displayed
    console.log("Index:" + index);
    document.querySelector("#modalDescription").innerHTML = filteredProductList[index].description;
    document.querySelector("#modalPrice").innerHTML = filteredProductList[index].price;

}
